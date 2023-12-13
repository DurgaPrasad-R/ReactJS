import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-1 m-2">
      <h3 className="font-bold text-md">{title}</h3>
      {!isVisible ? (
        <button
          className="cursor-pointer underline mr-2"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="font-bold flex justify-center text-lg p-4">Instamart</h1>
      <Section
        title="About Instamart"
        description="Welcome to Instamart, your one-stop shop for all things home! We're passionate about making your life easier by offering a wide range of household essentials. From cozy cushions to sleek kitchen gadgets, we've got it all. Our mission is to bring convenience to your doorstep, ensuring you spend less time shopping and more time enjoying your home sweet home. With top-notch quality and unbeatable prices, we aim to simplify your shopping experience. Whether you're looking for stylish decor or practical organizers, Instamart has something for every corner of your abode. Join our community of happy homemakers and let's make your house a home together!"
        isVisible={visibleSection == "about"}
        setIsVisible={() => setVisibleSection("about")}
      />
      <Section
        title="Contact Instamart"
        description="Need assistance or have a question? Reach out to us anytime – we're here to help! You can contact our friendly customer support team via email at support@instamart.com or give us a ring at +1 (555) 123-4567. For quick updates and inspiration, follow us on Instagram @instamart_official. Our office is located at 123 Home Street, Cityville, State, Zip. We value your feedback, so don't hesitate to drop us a message or swing by our store during our operating hours, Monday through Friday, 9 AM to 6 PM. Your satisfaction is our priority!"
        isVisible={visibleSection == "contact"}
        setIsVisible={() => setVisibleSection("contact")}
      />
      <Section
        title="Team"
        description="Meet the passionate minds behind Instamart! Our team is a blend of creative wizards, tech enthusiasts, and customer care aficionados, all dedicated to making your shopping experience seamless. From our CEO, Sarah, whose vision drives us forward, to our tech whiz, Alex, crafting the perfect online platform, each member brings unique expertise to the table. Meet our design guru, Maya, who adds flair to our product range, and our customer care heroes, Jake and Emily, ready to assist you with a smile. Together, we're committed to bringing you the best in household essentials and ensuring your satisfaction every step of the way."
        isVisible={visibleSection == "team"}
        setIsVisible={() => setVisibleSection("team")}
      />
    </div>
  );
};

export default Instamart;
