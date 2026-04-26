
type ConversionItemProps = {
    label: string
    symbol: string 
    value: number
}

export default function ConversionItemProps({label, symbol, value}: ConversionItemProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-2xl font-bold">{value} {symbol}</p>
        </div>
    )
}
