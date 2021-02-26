import Wrapper from "../components/ui/wrapper/Wrapper";
import RegisterForm from "../components/ui/form/registerForm";

const images = [
  { src: "/images/register1.jpeg", rotation: "-26deg", margin: { mt: "1rem" } },
  { src: "/images/register2.jpeg", rotation: "6deg", margin: { mb: "1rem" } },
  { src: "/images/register3.jpeg", rotation: "-6deg", margin: { mt: "1rem" } },
  {
    src: "/images/register4.jpeg",
    rotation: "18deg",
    margin: { mb: "1.5rem" },
  },
];

const desc =
  " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in";

const RegisterPage = () => {
  return (
    <Wrapper images={images} title="Ready to start your journey?" desc={desc}>
      <RegisterForm mb={6} shadow="xl" borderRadius={10} />
    </Wrapper>
  );
};

export default RegisterPage;
