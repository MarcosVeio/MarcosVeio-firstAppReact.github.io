import '../button/styles.css'

export const Button = ({ handleOnClick, value, className }) => {
    return (
        <button className={className} onClick={() => handleOnClick()}>{value}</button>
    )
}