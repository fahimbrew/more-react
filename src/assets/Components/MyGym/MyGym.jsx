import Package from "../Package/Package";

const MyGym = () => {
  const gymData = [
    {
      id: 1,
      price: 50,
      plan: "Basic",
      features: [
        "Access to all gym equipment",
        "Free group fitness classes",
        "1 personal training session",
        "Locker room access",
      ],
    },
    {
      id: 2,
      price: 75,
      plan: "Standard",
      features: [
        "Access to all gym equipment",
        "Unlimited group fitness classes",
        "3 personal training sessions",
        "Locker room with towel service",
      ],
    },
    {
      id: 3,
      price: 100,
      plan: "Premium",
      features: [
        "Access to premium gym equipment",
        "Unlimited group fitness and yoga classes",
        "5 personal training sessions",
        "Access to spa and sauna",
      ],
    },
    {
      id: 4,
      price: 150,
      plan: "VIP",
      features: [
        "VIP access to all facilities",
        "Custom fitness program",
        "Unlimited personal training sessions",
        "Exclusive lounge and nutrition consultations",
      ],
    },
  ];

  return (
    <div className="my-5 container mx-auto">
      <h3 className="text-3xl font-black text-center my-4">
        Total Package {gymData.length}
      </h3>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {gymData.map((packages) => (
          <Package key={packages.id} packages={packages}></Package>
        ))}
      </div>
    </div>
  );
};

export default MyGym;
