type dataButton = {
    className?: string,
    children?: string,
}

export default function ButtonStyled({ className, children }: dataButton){
    return(
        <button className={className}>{children}</button>
    )
}