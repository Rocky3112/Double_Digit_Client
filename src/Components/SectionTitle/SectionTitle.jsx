/* eslint-disable react/prop-types */


const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-4">
            <h2 className="text-yellow-500 py-2"> --- {subHeading} --- </h2>
            <p className="text-4xl uppercase font-semibold border-y-2 ">{heading}</p>
        </div>
    );
};

export default SectionTitle;