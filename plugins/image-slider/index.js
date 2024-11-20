import React from "react";

export default function registerPlugin({ addContentBlock }) {
    addContentBlock({
        type: "image-slider",
        render: (props) => <ImageSlider {...props} />,
    });
}

const ImageSlider = ({ images }) => {
    if (!images || images.length === 0) return <div>No images to display</div>;
    return (
        <div style={{ display: "flex", overflowX: "scroll" }}>
            {images.map((img, index) => (
                <img key={index} src={img} alt={`Slide ${index}`} style={{ margin: "0 10px" }} />
            ))}
        </div>
    );
};
