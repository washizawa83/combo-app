import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  type: 'text' | 'number'
  placeholder?: string
  registerName: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

export const InputForm = ({
  type,
  placeholder,
  registerName,
  register,
  errors,
}: Props) => {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        placeholder={placeholder}
        className="text-black text-2xl h-10 pl-2"
        {...register(registerName, { valueAsNumber: true })}
      />
      {errors[registerName] && (
        <span className="text-accentRed">
          {errors[registerName].message?.toString()}
        </span>
      )}
    </div>
  )
}
