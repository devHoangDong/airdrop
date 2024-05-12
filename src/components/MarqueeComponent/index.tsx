import Link from "next/link";
import Marquee from 'react-fast-marquee';
import { Alert } from 'antd';

const MarqueeComponent = () => {
  return (
    <>
      <section
        id="marquee"
      className="relative z-10 overflow-hidden bg-white  dark:bg-gray-dark"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto text-center">
              <Marquee pauseOnHover gradient={false}>
                      I can be a React component, multiple React components, or just some text.
                    </Marquee>
                {/* <Alert
                type="info"
                  message={
                    <Marquee pauseOnHover gradient={false}>
                      I can be a React component, multiple React components, or just some text.
                    </Marquee>
                  }
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarqueeComponent;
