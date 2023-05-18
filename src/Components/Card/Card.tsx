import RatingStar from "../RatingStar";

interface Props {
    image_link: string,
    name: string,
    category: String,
    num_ratings: number,
    rating: number,
    discount_percentage: number,
    price: number,
}

function Card(props: Props) {
    return (
        <div className="bg-white rounded shadow-lg">
            <img alt="product image" src={props.image_link} className="w-full h-32 object-cover" />
            <div className="flex flex-col gap-1 p-2 overflow-hidden">
                <strong className="truncate">{props.name}</strong>
                <small>{props.category}</small>
                <div className="flex gap-2 items-center"><RatingStar value={props.rating} /><small>({props.num_ratings})</small></div>
                <div className="flex gap-2 flex-wrap items-end">
                    <strong>${props.price}</strong>{
                        props.discount_percentage > 0 && <><small><s>${(props.price * 100 / props.discount_percentage).toFixed(2)}</s></small> <span className="text-green-400">{props.discount_percentage}% off</span></>
                    }</div>
            </div>
        </div>
    )
}

export default Card;
