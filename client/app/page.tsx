import SectionModul from "./_components/SectionModul";
import ProfileLogo from "./_components/ProfileLogo";
import ProfileText from "./_components/ProfileText";
import Work from "./_components/Work";
import Work3D from "./_components/Work3D";
import Form from "./_components/Form";
import { Toaster } from "react-hot-toast";

export default function page() {
  return (
    <>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
          style: {
            border: "2px solid #16F0B3",
            fontSize: "16px",
            maxWidth: "500px",
            padding: "12px 24px",
            backgroundColor: "#291D4F",
            color: "#E8E5F2",
          },
        }}
      />
      <SectionModul customBg="bg-custom1">
        <ProfileLogo />
      </SectionModul>
      <SectionModul customBg="bg-custom2">
        <ProfileText />
      </SectionModul>
      <SectionModul customBg="bg-custom1">
        <Work />
      </SectionModul>
      <SectionModul customBg="bg-custom2">
        <Work3D />
      </SectionModul>
      <SectionModul customBg="bg-custom1">
        <Form />
      </SectionModul>
    </>
  );
}
