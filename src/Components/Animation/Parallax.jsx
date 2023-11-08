import { Parallax } from "react-parallax";

// Import Image
import space from "../../Assets/Images/space.jpg";

const Parallax = () => (
	<Parallax bgImage={space} bgImageAlt="space" strength={200}>
		Content goes here. Parallax height grows with content height.
	</Parallax>
);

export default Parallax;
