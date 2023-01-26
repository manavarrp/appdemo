import confiadora from '../assets/public/confiadora.png';

function logo() {
  return (
    <div className="flex justify-center py-4 gap-2">
      <picture>
        <img width={30} height={30} src={confiadora} alt="confiadora" />
      </picture>
      <span className="text-darkBlue text-3xl font-bold  text-center">
        confiadora
      </span>
    </div>
  );
}

export default logo;
