import Button from "../UI/Button";
import InfoContainer from "../UI/InfoContainer";

const ContactForm = () => {
  return (
    <div className="flex flex-col sm:flex-row p-5 sm:p-10 m-5 gap-10 sm:m-10 justify-between  flex-wrap">
      <div className="mb-10 sm:mb-0 justify-center flex flex-col ">
        <InfoContainer title="Telefono" description="Numero Telefonicoooooo" />
        <InfoContainer title="Correo Electronico" description="naturenest@example.com" />
        <InfoContainer
          title="Direccion"
          description="123 Main Street, Anytown, CA 12345"
        />
      </div>
      <form className="flex flex-col gap-5 justify-start text-black w-full sm:w-auto">
        <div className="flex flex-col sm:flex-row gap-5">
          <input
            placeholder="Nombre de la Empresa"
            className="text-black placeholder-gray-500 text-lg bg-transparent border-b border-black outline-none focus:border-none"
          />
          <input
            placeholder="Correo Electronico"
            className="text-black placeholder-gray-500 text-lg bg-transparent border-b border-black outline-none focus:border-none"
          />
        </div>
        <input
          placeholder="Asunto"
          className="text-black placeholder-gray-500 text-lg bg-transparent border-b border-black outline-none focus:border-none"
        />
        <textarea
          placeholder="Mensaje"
          className="text-black placeholder-gray-500 text-lg bg-transparent border-b border-black outline-none focus:border-none h-32"
        />
        <Button
          text="Enviar"
          style={{ hover: { color: "red" } }}
          className="w-full sm:w-auto"
        />
      </form>
    </div>
  );
};

export default ContactForm;
