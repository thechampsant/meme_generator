import './Button.scss';



const Button = (prop) => (
    <button className='customButton' onClick={() => {
        if(prop.name === 'Prev')
            prop.func(-1)
        else if(prop.name === 'Next')
            prop.func(1)
        }}
        >
        {prop.name}
    </button>
)

export default Button;