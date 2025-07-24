export default function Page() {
  return (
    <div className="w-full">
      <h1 className="text-6xl font-bold text-center">
        Computer Science Exit exam 2025
      </h1>
      <div className="py-24 grid grid-cols-[15%_50%_35%] gap-6 w-full">
        <div className="bg-gray-300 border">
          <h1 className="text-xl font-bold">Question 1</h1>
          <h2>Not yet answered</h2>
          <h2>Marked out of</h2>
          <h3>1.00</h3>
          <h3>Flag question</h3>
        </div>
        <div>
          <div className="bg-green-200 rounded-md">
            <h1>
              6. Let KPRIV-A and KPUB-A be private and public keys for awigichew
              and KPRIV-M and KPUB-M are private and public keys for Meron
              respectively. If Awifichew would like to send secured message to
              Meron, which one of the following scenario is not correct if they
              are using asymmetric keys?
            </h1>
            <div className="space-y-2">
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
          </div>
          <div className="flex justify-between">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Next
            </button>
          </div>
        </div>
        <div>30% Column</div>
      </div>
    </div>
  );
}
