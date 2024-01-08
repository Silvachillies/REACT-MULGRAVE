import { ArrowBigLeft, ArrowBigRight, Image } from "lucide-react";
import propTypes from "prop-types";
import { useState } from "react";

export default function Slider({ imageURLS }) {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <>
      <button>
        <ArrowBigLeft />
      </button>
      <button>
        <ArrowBigRight />
      </button>
    </>
  );
}
