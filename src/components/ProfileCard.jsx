export default function ProfileCard() {
  return (
    <div className="bg-[#1A1F2E] rounded-2xl p-6 border border-gray-800">

      <h2 className="text-xl font-semibold mb-4">
        👤 User Profile
      </h2>

      <div className="space-y-3">

        <div>
          <p className="text-gray-400 text-sm">
            Name
          </p>

          <p>Snehal</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Sleep Goal
          </p>

          <p>8 Hours</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Daily Water Goal
          </p>

          <p>3 Litres</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Current Status
          </p>

          <p className="text-green-400">
            Active
          </p>
        </div>

      </div>

    </div>
  );
}