import Link from "next/link";
import Image from "next/image";

export default function HeaderLogo(props) {
  const { alt } = props;

  return (
    <div id={alt ? "fleet-logo" : "header-logo"}>
      <Link href="/">
        <a>
          {alt ? (
            <Image src="/image/logo-fleet.png" height={67} width={333} />
          ) : (
            <Image src="/image/logo-main.png" height={67} width={270} />
          )}
        </a>
      </Link>
    </div>
  );
}
