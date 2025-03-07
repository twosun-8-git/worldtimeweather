"use server";

import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
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

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "必須項目が不足しています" };
  }

  try {
    // 管理者向けメール
    const adminMailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `${name}様よりお問い合わせ`,
      text: `
${name}様よりお問い合わせがありました。
内容を確認してください。

==============================================

■お名前
${name}

■返信先メールアドレス
${email}

■ご意見・お問い合わせ内容
${message}
==============================================
      `.trim(),
    };

    // ユーザー向け自動返信メール
    const userMailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: `お問い合わせありがとうございます`,
      text: `
${name}様

いつもご利用ありがとうございます。
下記の内容でお問い合わせを受け付けました。

==============================================

■お名前
${name}

■返信先メールアドレス
${email}

■ご意見・お問い合わせ内容
${message}
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

    // 並行でメール送信
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return { success: true, message: "メールを送信しました" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "メール送信に失敗しました" };
  }
}
