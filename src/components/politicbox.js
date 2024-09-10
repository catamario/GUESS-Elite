function Caseta({titlu, continut})
{
    return (
        <div className="bg-gray-200 drop-shadow-3xl p-4 rounded-md shadow-md w-[250px] h-[300px] ml-5 mr-5">
          <h2 className="font-bold text-md sm:text-lg">{titlu}</h2>
          <p className="mt-2 text-xs sm:text-base text-gray-700">{continut}</p>
        </div>
      );
}

export default Caseta;