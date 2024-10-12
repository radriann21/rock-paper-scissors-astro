import { OptionsList } from "./OptionList"

export const ListScreen = ({ options, handleOption }) => {
  return (
    <section className="w-full md:w-[60%] lg:w-[30%] h-[320px] bg-triangle bg-no-repeat bg-center p-8 flex items-center justify-center relative">
      <OptionsList options={options} handleOption={handleOption} />
    </section>
  )
}