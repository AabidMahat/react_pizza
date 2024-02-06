import { Bars } from 'react-loader-spinner';

function Loader() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm ">
      <Bars
        height="80"
        width="80"
        color="#000"
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>
  );
}

export default Loader;
