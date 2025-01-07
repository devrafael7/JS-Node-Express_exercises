function FormInput({ className, ...props }) {
    return (
      <input
        className={`w-full h-8 border-b border-black border-solid px-1 bg-gray-200 outline-none text-lg mb-10 pb-2 ${className}`}
        {...props}
      />
    );
  }
  
  export default FormInput;
  