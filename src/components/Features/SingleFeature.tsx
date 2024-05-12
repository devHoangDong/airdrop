import { Feature } from "@/types/feature";
import { Avatar, Card } from 'antd';
// import './singlefeature.scss'
import { Typography } from 'antd';
// const { Title } = Typography;

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <Card
          title=""
          extra={<a href="#">a week</a>}
          bordered={false}
          style={{
            width: 300,
          }}
        >
          <Avatar className="absolute top-26" size={60} style={{ backgroundColor: '#87d068' }} src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          <h2 className="mt-5">h3. Ant Design</h2>
          <p>Card content</p>
        </Card>
        {/* <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p> */}
      </div>
    </div>
  );
};

export default SingleFeature;
