import ClipLoader from "react-spinners/ClipLoader";

export default function Loader ({loading}) {
    const override= {
        display: "block",
        margin: "0 auto",
        borderColor: "blue",
      };

      return (
        <div className="sweet-loading">
          <ClipLoader
            color="blue"
            loading={loading}
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      );
}