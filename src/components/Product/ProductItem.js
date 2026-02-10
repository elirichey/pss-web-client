import Link from "next/link";
import Image from "next/image";

export default function ProductItem(props) {
    const { item } = props;
    const {name, category, isFeatured, imageUrl, productUrl} = item
  
    return (
        <Link href={productUrl} target="_blank" className="category-product-item">
            <div className="category-product-item-image">
                <Image src={imageUrl} alt={name} width={200} height={200} objectFit="contain" />
            </div>
            <div className="category-product-item-name">
                {name}
            </div>
        </Link>
    );
  }
  