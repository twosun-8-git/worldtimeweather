import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

import { form } from "@/types";
import { SITE_NAME, SITE_URL, COMPANY_NAME } from "@/consts";

const transportOptions: SMTPTransport.Options = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(transportOptions);

export async function POST(request: Request) {
  try {
    const data: form = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "必須項目が不足しています" },
        { status: 400 }
      );
    }

    // 管理者向けメール
    const adminMailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `${data.name}様よりお問い合わせ`,
      text: `
${data.name}様よりお問い合わせがありました。
内容を確認してください。

==============================================

■お名前
${data.name}

■返信先メールアドレス
${data.email}

■ご意見・お問い合わせ内容
${data.message}
==============================================
      `.trim(),
    };

    // ユーザー向け自動返信メール
    const userMailOptions = {
      from: process.env.SMTP_FROM,
      to: data.email,
      subject: `お問い合わせありがとうございます`,
      text: `
${data.name}様

いつもご利用ありがとうございます。
下記の内容でお問い合わせを受け付けました。

==============================================

■お名前
${data.name}

■返信先メールアドレス
${data.email}

■ご意見・お問い合わせ内容
${data.message}
==============================================

内容を確認後に改めてご連絡差し上げますので今しばらくお待ちください。
※このメールは送信専用のため直接のご返信はお控えください。

———————————————————————————
□ Developer: ${COMPANY_NAME}
□ Web: ${SITE_NAME}
□ URL: ${SITE_URL}
———————————————————————————
      `.trim(),
    };

    // 両方のメールを送信
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json(
      { message: "メールを送信しました" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "メール送信に失敗しました" },
      { status: 500 }
    );
  }
}
