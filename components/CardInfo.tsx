type CardInfoProps = {
    title: string;
    value: React.ReactNode;
}

export default function CardInfo({title, value}: CardInfoProps){

return(

<div className="
rounded-2xl
border
border-zinc-200
bg-zinc-50
p-5
">

<p className="text-sm text-zinc-500">
{title}
</p>

<h3 className="mt-2 text-xl font-semibold text-zinc-500">
{value}
</h3>

</div>

);

}