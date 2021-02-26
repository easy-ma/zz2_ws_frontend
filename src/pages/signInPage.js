import Wrapper from "../components/ui/wrapper/Wrapper";
import SignInForm from "../components/ui/form/signInForm";

const images = [
  { src: "/images/signin.jpeg", rotation: "-26deg", margin: { mt: "1rem" } },
  { src: "/images/signin2.jpeg", rotation: "6deg", margin: { mb: "1rem" } },
  { src: "/images/signin3.jpeg", rotation: "-6deg", margin: { mt: "1rem" } },
  { src: "/images/signin4.jpeg", rotation: "18deg", margin: { mb: "1.5rem" } },
];

const desc =
  " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in";

const SignInPage = () => {
  return (
    <Wrapper images={images} title="Ready to start your journey?" desc={desc}>
      <SignInForm mb={6} shadow="xl" borderRadius={10} />
    </Wrapper>
  );
};

export default SignInPage;
