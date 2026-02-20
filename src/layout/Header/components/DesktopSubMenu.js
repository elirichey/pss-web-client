import Link from "next/link";

export default function DesktopSubMenu() {
    return (
        <div id="desktop-sub-menu" className="flex">
            <div className="container row">
                <ul className="flex row">
                     <li>
                        <Link href="/category/lights">Lights</Link>
                    </li>
                    <li>
                        <Link href="/category/sirens">Sirens</Link>
                    </li>
                    <li>
                        <Link href="/category/consoles">Consoles</Link>
                    </li>
                    <li>
                        <Link href="/category/mounts">Computer Mounts</Link>
                    </li>
                    <li>
                        <Link href="/category/transport">Prisoner Transport</Link>
                    </li>
                    <li>
                        <Link href="/category/gun-racks">Gun Racks</Link>
                    </li>
                    <li>
                        <Link href="/category/vaults">Storage Vaults</Link>
                    </li>
                    <li>
                        <Link href="/category/bumpers">Push / PIT Bars</Link>
                    </li>
                    <li>
                        <Link href="/category/k9">K9</Link>
                    </li>
                    <li>
                        <Link href="/category/speed">Radar</Link>
                    </li>
                    <li>
                        <Link href="/category/thermal-cameras">Thermal Cameras</Link>
                    </li>
                    <li>
                        <Link href="/category/extras">Extras</Link>
                    </li>    
                </ul>
            </div>
        </div>
    );
}