import React from "react";
import './MainPage.scss';
import { News } from "../../models/News";
import { NewsComponent } from "../../components";

interface Props {}

const news: News[] = [
	{
		source: {
			id: "engadget",
			name: "Engadget"
		},
		author: "Mat Smith",
		title:
			"The Morning After: Google Stadia's launch game line-up gets a big boost - Engadget",
		description:
			"Hey, good morning! We kick off the week with the launch of Google's much-publicized Stadia streaming game service tomorrow, with the company fleshing out the la...",
		url:
			"https://www.engadget.com/2019/11/18/the-morning-after-google-stadias-launch-game-line-up-gets-a-bi/",
		urlToImage:
			"https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-11%252F18a6a6b0-09ef-11ea-acff-99e50bc8ee00%26client%3Da1acac3e1b3290917d92%26signature%3Dac3a5bdbd16b1f36b31a1163ee627889a98f6ffd&client=amp-blogside-v2&signature=3bbeb01ebb88755a7006ce60e5d81a188def6bd5",
		publishedAt: "2019-11-18T11:45:39Z",
		content:
			"The new list includes 'Metro Exodus,' 'NBA 2K20' and 'Football Manager 2020'.Google Stadia's launch line-up gets a 10-game boost\r\nAfter announcing its cloud-streaming Stadia game service would launch with just 12 titles, Google has nearly doubled that number,… [+2948 chars]"
	},
	{
		source: {
			id: "engadget",
			name: "Engadget"
		},
		author: "Mat Smith",
		title:
			"The Morning After: Google Stadia's launch game line-up gets a big boost - Engadget",
		description:
			"Hey, good morning! We kick off the week with the launch of Google's much-publicized Stadia streaming game service tomorrow, with the company fleshing out the la...",
		url:
			"https://www.engadget.com/2019/11/18/the-morning-after-google-stadias-launch-game-line-up-gets-a-bi/",
		urlToImage:
			"https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-11%252F18a6a6b0-09ef-11ea-acff-99e50bc8ee00%26client%3Da1acac3e1b3290917d92%26signature%3Dac3a5bdbd16b1f36b31a1163ee627889a98f6ffd&client=amp-blogside-v2&signature=3bbeb01ebb88755a7006ce60e5d81a188def6bd5",
		publishedAt: "2019-11-18T11:45:39Z",
		content:
			"The new list includes 'Metro Exodus,' 'NBA 2K20' and 'Football Manager 2020'.Google Stadia's launch line-up gets a 10-game boost\r\nAfter announcing its cloud-streaming Stadia game service would launch with just 12 titles, Google has nearly doubled that number,… [+2948 chars]"
	}
];

const MainPage: React.FC<Props> = () => {
	return (
		<div className="page">
			<div className="search">
				<input placeholder="Search" />
			</div>
			{news.map((newsEl: News) => (
				<div className="news-container">
					<NewsComponent {...newsEl} />
				</div>
			))}
		</div>
	);
};

export default MainPage;
