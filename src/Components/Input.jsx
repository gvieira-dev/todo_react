function Input(props) {
    return(
        <input type={props.type} 
        placeholder={props.placeholder}
        className="px-4 py-2 rounded-md outline-none border border-gray-600 focus:border-white"
        style={{
        backgroundColor: '#2F3437',
        color: '#FFFFFF',
        }}
        value={props.value}
        onChange={props.onChange}
        />
    )

}

export default Input;