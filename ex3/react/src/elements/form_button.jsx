function FormButton({ children, className, ...props}){
    return <button className={`self-center w-5/6 h-11 bg-blue-600 rounded-sm text-white ${className}`} type="submit" {...props}>
      {children}
    </button>
}


export default FormButton;