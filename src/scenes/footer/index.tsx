import Logo from "@/assets/Logo.png"
import Link from "../navbar/Link";

type Props = {};

const Footer = () => {
    return <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
<div className="mt-16 basis-1/2 md:mt-0">
    <img alt="Logo" src={Logo} />
    <p className="my-5">
        Elit porro voluptate possimus, distinctio nisi, rerum inventore mollitia consequatur saepe beatae quae laborum. Sapiente dolor dolorem numquam possimus voluptate similique expedita sunt!
    </p>
    <p>
        Evogym All Rights Reserved
    </p>
</div>
<div className="mt-16 basis-1/4 md:mt-0">
<h4 className="font-bold">Links</h4>
<p className="my-5">Dolor dolorem numquam</p>
<p className="my-5">Quae laborum</p>
<p className="my-5">Rerum inventore</p>
</div>
<div className="mt-16 basis-1/4 md:mt-0">
<h4 className="font-bold">Contact Us</h4>
<p className="my-5">+123 456 789 0</p>

</div>
        </div>
    </footer>;
};

export default Footer;
