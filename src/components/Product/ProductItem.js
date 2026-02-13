import Link from "next/link";
import Image from "next/image";

export default function ProductItem(props) {
    const { item } = props;
    const {name, imageUrl, productUrl} = item
    const placeholderImg = "/image/placeholders/no-image.jpg";
    const imageIsNotEmpty = imageUrl && imageUrl.trim() !== "";
    const image = imageIsNotEmpty ? imageUrl : placeholderImg;

    return (
        <Link href={productUrl || '#'} target="_blank" className="category-product-item">
            <div className="category-product-item-image">
                <Image src={image} alt={name} width={200} height={200} objectFit="contain" />
            </div>
            <div className="category-product-item-name">
                {name}
            </div>
        </Link>
    );
  }
  