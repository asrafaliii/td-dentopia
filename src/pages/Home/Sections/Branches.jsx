import Title from "../../../components/SectionTitle";
import { FiMapPin } from "react-icons/fi";

export default function Branches() {
  const branches = [
    {
      id: 1,
      title: "Uttar Badda Main Branch",
      address:
        "Uttar Badda, Shadhinota Sarani Road, Behind A.M.Z Hospital, Dhaka-1212.",
    },
    {
      id: 2,
      title: "Middle Badda Branch",
      address: "640 Middle Badda Bazar Road, Dhaka-1212.",
    },
  ];

  return (
    <section className="bg-background">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-16 ">
        {/* 12 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 4 Columns - Title & Subtitle */}
          <div className="lg:col-span-4">
            <Title
              subtitle="Our Locations"
              title="Modern Dental Center Branches"
              align="start"
            />
          </div>

          {/* Right 8 Columns - Two Branch Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="bg-white rounded-xl shadow-md p-6 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                  <FiMapPin className="text-primary text-2xl" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  {branch.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {branch.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
