import { fetchData } from "./api/data";

interface Carrier {
  name: string;
  usDotNumber: string;
  docketNumbers: string;
  dotStatus: string;
  authorityStatus: string;
  carrierType: string;
}

export default async function Page() {
  let data;

  try {
    data = await fetchData();
    console.log(data[1].name)
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Failed to load data</div>;
  }

  return (


<div className="m-10 flex flex-col border border-gray-300 rounded-lg shadow-md">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
          <thead>
                <tr>
                  {["Name", "usDotNumber", "docketNumbers", "dotStatus", "authorityStatus", "carrierType"].map(
                  (header) => (
                    <th
                      key={header}
                      className="px-6 py-3 text-start text-xs font-large text-gray-500 uppercase dark:text-neutral-500"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            {data.map((carrier: Carrier, index: number) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-neutral-500">{carrier.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-800 dark:text-neutral-500">{carrier.usDotNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-800 dark:text-neutral-500">{carrier.docketNumbers}</td>
                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-800 dark:text-neutral-500">{carrier.dotStatus}</td>
                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-800 dark:text-neutral-500">{carrier.authorityStatus}</td>
                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-800 dark:text-neutral-500">{carrier.carrierType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

  );
}
