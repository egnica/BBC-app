import styles from "./index.css";

export const metadata = {
	title: "Barlow Bussiness Banking Conference",
	description: "Barlow Bussiness Banking Conference",
};

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<head>
				<meta http-equiv='refresh' content='3600' />
			</head>
			<body>{children}</body>
		</html>
	);
}
