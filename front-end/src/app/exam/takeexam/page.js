import ButtonGrid from "@/components/Button";
import { FlagIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="w-full">
      <h1 className="text-6xl font-bold text-center">
        Computer Science Exit exam 2025
      </h1>
      <div className="py-24 grid grid-cols-[15%_55%_30%] gap-6 w-full">
        <div className="bg-gray-300 border max-h-40">
          <h1 className="text-xl font-bold">Question 1</h1>
          <h2>Not yet answered</h2>
          <h2>Marked out of</h2>
          <h3>1.00</h3>
          <div>
            <div className="flex items-center gap-2 mt-2 cursor-pointer hover:text-red-600">
              <FlagIcon className="h-5 w-5" />
              <span className="font-medium">Flag question</span>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-green-200 rounded-md p-3">
            <h1>
              6. Let KPRIV-A and KPUB-A be private and public keys for awigichew
              and KPRIV-M and KPUB-M are private and public keys for Meron
              respectively. If Awifichew would like to send secured message to
              Meron, which one of the following scenario is not correct if they
              are using asymmetric keys?
            </h1>
            <div className="space-y-2 py-3">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="option1"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span>
                  A. Awifichew uses Meron&apos;s private key KPRIV-M to encrypt
                  his plain text
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="option2"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span>
                  B. Awifichew uses his KPUB-A to encrypt his plain text
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="option2"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span>
                  C. Meron can decode the encrypted text using her KPRIV-M
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="option2"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span>
                  D. Meron can decode the scrambled text using her KPUB-M
                </span>
              </label>
            </div>
            <div className="py-3 flex justify-center space-x-3">
              <button type="button" className="border rounded-sm px-2 bg-white">
                Need a hint?
              </button>
              <button type="button" className="border rounded-sm px-2 bg-white">
                Get AI explanation
              </button>
            </div>
          </div>
          <div className="flex justify-between py-3">
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Previous
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Next
            </button>
          </div>
        </div>

        <div className="bg-gray-100 border rounded-sm mr-9">
          <ButtonGrid />
        </div>
      </div>
    </div>
  );
}
