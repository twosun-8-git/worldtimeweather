import Link from "next/link";
export function LogoMark() {
  return (
    <Link href="/" className="flex pt-1.5">
      <svg
        width="38"
        height="18"
        viewBox="0 0 38 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="World Time Weather"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.8504 13.0554H0V14.0443H37.8394L36.8504 13.0554Z"
          fill="#B5BAC5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.12085 2.98895V18H5.1098V2L4.12085 2.98895Z"
          fill="#B5BAC5"
        />
        <path
          d="M28.8149 12.0373L26.6008 3.90793H27.66L29.2768 10.5162H29.3444L31.1641 3.90793H32.1894L34.0091 10.5162H34.0767L35.6936 3.90793H36.7527L34.5387 12.0373H33.581L31.7106 5.62057H31.643L29.7726 12.0373H28.8149Z"
          fill="#94949D"
        />
        <path
          d="M21.0071 12.0373V4.82059H18.3875V3.90793H24.6408V4.82059H22.0212V12.0373H21.0071Z"
          fill="#94949D"
        />
        <path
          d="M8.49041 12.0373L6.27637 3.90792H7.3355L8.95237 10.5162H9.01997L10.8397 3.90792H11.865L13.6847 10.5162H13.7523L15.3691 3.90792H16.4283L14.2142 12.0373H13.2565L11.3861 5.62056H11.3185L9.44813 12.0373H8.49041Z"
          fill="#94949D"
        />
      </svg>
    </Link>
  );
}
