import React from "react";

// React Router
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Navbar
import Navbar from "../Navbar";

// Footer
import Footer from "../Footer";

// Import Images
import fixitlogo from "../../Assets/Images/fixit/fixit logo.png";
import fixitlogo2 from "../../Assets/Images/fixit/fixit logo 2.png";
import fixitmockup from "../../Assets/Images/fixit/fixit mockup.png";
import fixitmockup2 from "../../Assets/Images/fixit/fixit mockup 2.jpg";
import navigation from "../../Assets/Images/fixit/navigation.png";
import homepage from "../../Assets/Images/fixit/homepage.png";
import jobposting1 from "../../Assets/Images/fixit/job posting 1.png";
import jobposting2 from "../../Assets/Images/fixit/job posting 2.png";
import daftarproposal from "../../Assets/Images/fixit/daftar proposal.png";
import detailproposal from "../../Assets/Images/fixit/detail proposal.png";
import kontrak1 from "../../Assets/Images/fixit/kontrak 1.png";
import kontrak2 from "../../Assets/Images/fixit/kontrak 2.png";
import pembayaran1 from "../../Assets/Images/fixit/pembayaran 1.png";
import pembayaran2 from "../../Assets/Images/fixit/pembayaran 2.png";
import qris1 from "../../Assets/Images/fixit/QRIS 1.png";
import qris2 from "../../Assets/Images/fixit/QRIS 2.png";

const Fixit = () => {
	const navigate = useNavigate();

	const routePath = useLocation();
	const onTop = () => {
		window.scrollTo(0, 0);
	};
	useEffect(() => {
		onTop();
	}, [routePath]);

	return (
		<div className="bg-lightbg dark:bg-darkbg">
			<Navbar />
			<div className="relative w-full h-auto pt-20 pb-28 lg:pt-32 lg:pb-64 px-sectionpxsm lg:px-sectionpxlg xl:px-sectionpxxl">
				{/* Hero Section */}
				<div className="flex flex-col justify-between">
					<div className="flex flex-col w-full">
						<img
							src={fixitlogo}
							alt="fixitlogo"
							className="hidden w-20 dark:block"
						/>
						<img
							src={fixitlogo2}
							alt="fixitlogo2"
							className="block w-20 dark:hidden"
						/>
						<h1 className="text-5xl font-semibold text-black mt-11 dark:text-white lg:mt-10">
							Connecting people with the best local{" "}
							<span className="text-transparent bg-gradient-to-r dark:from-darkprimary from-lightprimary dark:via-purple-500 dark:to-pink-500 via-purple-500 to-pink-500 bg-clip-text">
								service providers
							</span>
						</h1>
						<div className="flex items-center justify-start mt-20 text-black gap-14 dark:text-white">
							<div className="flex flex-col justify-between gap-1">
								<p className="dark:text-slate-300 text-slate-600">
									Year
								</p>
								<p className="text-lg font-medium">
									2023 - Present
								</p>
							</div>
							<div className="flex flex-col justify-between gap-1">
								<p className="dark:text-slate-300 text-slate-600">
									Platform
								</p>
								<p className="text-lg font-medium">
									Mobile App
								</p>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center w-full mt-28">
						<img
							src={fixitmockup}
							alt="fixitmockup"
							className="w-full"
						/>
					</div>
				</div>
			</div>

			{/* Case Study Section */}

			{/* Overview */}
			<div className="flex flex-col justify-between w-screen gap-4">
				<img
					src={fixitmockup2}
					alt="fixitmockup2"
					className="w-screen ml-0"
				/>
				<div className="flex flex-col justify-between gap-8 mt-20 text-black dark:text-white px-sectionpxsm">
					<p className="text-sm font-medium dark:text-darkprimary text-lightprimary">
						BACKGROUND
					</p>
					<h1 className="text-5xl font-semibold">Overview</h1>
				</div>
				<div className="flex flex-col items-center mt-5 text-black dark:text-white px-sectionpxsm">
					<p className="text-lg font-light">
						Fixit aims to revolutionize the way people access and
						interact with professional service providers. By
						providing a safe and reliable marketplace platform,
						Fixit empowers clients to find and hire the best
						professionals for their needs.
					</p>
					<p className="mt-5 text-lg font-light">
						Our vision is to create a community where anyone,
						anywhere, can easily connect with verified service
						providers and efficiently and safely get the job done.
						This community is founded on trust and respect.
					</p>
				</div>
			</div>

			{/* Background */}
			<div className="flex flex-col justify-between w-screen gap-4 mt-32">
				<div className="flex flex-col justify-between gap-8 text-black dark:text-white px-sectionpxsm">
					<p className="text-sm font-medium dark:text-darkprimary text-lightprimary">
						BACKGROUND
					</p>
					<h1 className="text-5xl font-semibold">What is Fixit?</h1>
				</div>
				<div className="flex flex-col items-center mt-5 text-black dark:text-white px-sectionpxsm">
					<p className="text-lg font-light">
						&bull; Fixit is a marketplace platform that connects
						clients with professional service providers.
					</p>
					<p className="mt-5 text-lg font-light">
						&bull; On Fixit, clients can find, interact with, and
						hire professional and verified service providers.
					</p>
					<p className="mt-5 text-lg font-light">
						&bull; Fixit guarantees the safety of transactions
						between clients and partners. Clients must deposit the
						agreed-upon rate with the partner, and once the job is
						successfully completed, the money goes to the partner.
					</p>
					<p className="mt-5 text-lg font-light">
						&bull; Both clients and partners on Fixit have full
						control over service rates, enabling them to negotiate.
					</p>
				</div>
			</div>

			{/* Features */}

			{/* Navigation */}
			<div className="flex flex-col justify-between w-full gap-4 mt-32 px-sectionpxsm">
				<div className="flex flex-col justify-between gap-8 text-black dark:text-white">
					<p className="text-sm font-medium dark:text-darkprimary text-lightprimary">
						FEATURES
					</p>
					<h1 className="text-5xl font-semibold">Navigation</h1>
				</div>
				<div className="flex items-center mt-5 text-black dark:text-white">
					<p className="text-lg font-light">
						There are 4 main feature in this navigation, and those
						are <span className="font-semibold">Home</span> where
						the user can find any relevant recommendation contents,{" "}
						<span className="font-semibold">Pekerjaan</span> where
						the user can browse their jobs that have been posted,{" "}
						<span className="font-semibold">Kontrak</span> where the
						user can see their contracts in any status, and{" "}
						<span className="font-semibold">Transaksi</span> where
						the user can see their transaction history.
					</p>
				</div>
				<div className="flex items-center justify-center pt-1 pb-3 mt-14 border-[1px] dark:border-slate-50 border-slate-400 dark:border-opacity-20 border-opacity-40 rounded-2xl h-fit w-fit">
					<img src={navigation} alt="navigation" className="w-full" />
				</div>
			</div>

			{/* Homepage */}
			<div className="flex flex-col justify-between w-full gap-4 mt-32 px-sectionpxsm">
				<div className="flex flex-col justify-between gap-8 text-black dark:text-white">
					<p className="text-sm font-medium dark:text-darkprimary text-lightprimary">
						FEATURES
					</p>
					<h1 className="text-5xl font-semibold">Homepage</h1>
				</div>
				<div className="flex items-center mt-5 text-black dark:text-white">
					<p className="text-lg font-light">
						This homepage contains any information that is
						potentially needed by the user. On top of the page there
						is location indicator, notification and main menu,
						followed by search field where the user can search
						desired partners. This platform has 8 main categories
						with relevant sub-categories within. Another core
						feature is Job Posting where the user can post their job
						with specified needs. The last is Nearby Partners based
						on the user's current location.
					</p>
				</div>
				<img src={homepage} alt="homepage" className="w-full mt-16" />
			</div>
			{/* Job Posting */}
			<div className="flex flex-col justify-between w-full gap-4 mt-32 px-sectionpxsm">
				<div className="flex flex-col justify-between gap-8 text-black dark:text-white">
					<p className="text-sm font-medium dark:text-darkprimary text-lightprimary">
						FEATURES
					</p>
					<h1 className="text-5xl font-semibold">Job Posting</h1>
				</div>
				<div className="flex items-center mt-5 text-black dark:text-white">
					<p className="text-lg font-light">
						Job Posting is our core feature. The user can create job
						based on their specific needs, budget, and also desired
						working-duration. After posting their job, the job
						becomes visible on Partners' side. Then, Partners can
						porpose their best offers which can make them the best
						candidate to hire.
					</p>
				</div>
				<img
					src={jobposting1}
					alt="jobposting1"
					className="w-full mt-16"
				/>
				<img
					src={jobposting2}
					alt="jobposting2"
					className="w-full mt-12"
				/>
			</div>

			{/* Proposal */}
			<div className="flex flex-col justify-between w-full gap-4 mt-32 px-sectionpxsm">
				<div className="flex flex-col justify-between gap-8 text-black dark:text-white">
					<p className="text-sm font-medium dark:text-darkprimary text-lightprimary">
						FEATURES
					</p>
					<h1 className="text-5xl font-semibold">Proposal</h1>
				</div>
				<div className="flex items-center mt-5 text-black dark:text-white">
					<p className="text-lg font-light">
						After posting specific job, the user can browse
						proposals that have been submitted by Partners, they can
						compare each prroposal to another based on working-fee
						or working-duration that Partners offer in proposal.
						Then, the user can directly create contract with desired
						Partner by clicking on CTA "Ajukan Kontrak".
					</p>
				</div>
				<img
					src={daftarproposal}
					alt="daftarproposal"
					className="w-full mt-16"
				/>
				<img
					src={detailproposal}
					alt="detailproposal"
					className="w-full mt-12"
				/>
			</div>

			{/* Kontrak */}
			<div className="flex flex-col justify-between w-full gap-4 mt-32 px-sectionpxsm">
				<div className="flex flex-col justify-between gap-8 text-black dark:text-white">
					<p className="text-sm font-medium dark:text-darkprimary text-lightprimary">
						FEATURES
					</p>
					<h1 className="text-5xl font-semibold">Contract</h1>
				</div>
				<div className="flex flex-col items-start mt-5 text-black dark:text-white">
					<p className="text-lg font-light text-left">
						In this section, the user is able to see all contracts
						in any status.
					</p>
					{/* Waiting for Approval */}
					<p className="mt-5 font-semibold">
						1. Waiting for approval
					</p>
					<p className="mt-2">
						In this case, the user has paid for the exact amount,
						and the contract is made, but it is still waiting for
						the approval from the Partner.
					</p>
					{/* Active */}
					<p className="mt-5 font-semibold">2. Active</p>
					<p className="mt-2">
						Active contract indicates that working process is
						underway.
					</p>
					{/* Completed */}
					<p className="mt-5 font-semibold">3. Completed</p>
					<p className="mt-2">
						This status shows that the working process is completely
						finished by the approvals from both sides, and the user
						can give feedback.
					</p>
					{/* Canceled */}
					<p className="mt-5 font-semibold">4. Canceled</p>
					<p className="mt-2">
						Canceled contract indicates that either the user cancles
						the contract or the Partner who rejects the contract.
					</p>
				</div>
				<img src={kontrak1} alt="kontrak1" className="w-full mt-16" />
				<img src={kontrak2} alt="kontrak2" className="w-full mt-12" />
			</div>

			{/* Payment */}
			<div className="flex flex-col justify-between w-full gap-4 mt-32 px-sectionpxsm">
				<div className="flex flex-col justify-between gap-8 text-black dark:text-white">
					<p className="text-sm font-medium dark:text-darkprimary text-lightprimary">
						PAYMENT
					</p>
					<h1 className="text-5xl font-semibold">Payment Methods</h1>
				</div>
				<div className="flex flex-col items-start mt-5 text-black dark:text-white">
					<p className="text-lg font-light text-left">
						There are 3 kinds of payment methods listed below, but
						we decided to use only QRIS for the MVP.
					</p>
					{/* QRIS */}
					<p className="mt-5 font-semibold">1. QRIS</p>
					<p className="mt-2">
						QRIS is our priority payment method, the clients will
						not be charged for any transaction by using QRIS as
						payment method.
					</p>
					{/* Virtual Account */}
					<p className="mt-5 font-semibold">2. Virtual Account</p>
					<p className="mt-2">
						The transaction fee via Virtual Account is IDR 4.440 for
						any amount, but Fixit covers IDR 2.440, so, transaction
						fee charged to clients is only IDR 2.000.
					</p>
					{/* Retail Outlets */}
					<p className="mt-5 font-semibold">3. Retail Outlets</p>
					<p className="mt-2">
						The transaction fee via Retail Outlets is IDR 5.550 for
						any amount, but Fixit covers IDR 2.550, so, transaction
						fee charged to clients is only IDR 3.000.
					</p>
				</div>
				<img
					src={pembayaran1}
					alt="pembayaran1"
					className="w-full mt-16"
				/>
				<img
					src={pembayaran2}
					alt="pembayaran2"
					className="w-full mt-12"
				/>
			</div>

			{/* QRIS */}
			<div className="flex flex-col justify-between w-full gap-4 mt-32 px-sectionpxsm">
				<div className="flex flex-col justify-between gap-8 text-black dark:text-white">
					<p className="text-sm font-medium dark:text-darkprimary text-lightprimary">
						PAYMENT
					</p>
					<h1 className="text-5xl font-semibold">QRIS</h1>
				</div>
				<div className="flex items-center mt-5 text-black dark:text-white">
					<p className="text-lg font-light">
						Since our MVP only implements QRIS as the only Payment
						Method, here is the flow of the payment process via
						QRIS. The user can see the transaction details which
						shows Total Fee, Transaction Fee, Discount of
						Transaction Fee, and Total Payment. The following screen
						shows the QR Code, and also payment instruction.
					</p>
				</div>
				<img src={qris1} alt="qris1" className="w-full mt-16" />
				<img src={qris2} alt="qris2" className="w-full mt-12" />
			</div>

			{/* Get in Touch */}
			<div
				id="getintouch"
				className="pb-56 pt-52 lg:pb-80 h-fit dark:bg-base bg-lightgrey px-sectionpxsm lg:px-sectionpxlg xl:px-sectionpxxl"
			>
				{/* Get in Touch Title */}
				<h1 className="text-5xl lg:text-[80px] xl:px-11 font-semibold text-center text-black md:text-6xl dark:text-white">
					Turning your ideas into{" "}
					<span className="text-transparent bg-gradient-to-r dark:from-darkprimary from-lightprimary dark:via-purple-500 dark:to-pink-500 via-purple-500 to-pink-500 bg-clip-text">
						real-life
					</span>{" "}
					products is my calling
				</h1>

				{/* Main Button */}
				<div className="flex justify-center mt-16 md:mt-16 lg:mt-28">
					<button
						className="pt-3 pb-[15px] text-[17px] font-medium dark:text-black text-white dark:bg-white bg-black rounded-xl w-fit h-fit px-10 dark:hover:bg-softgrey hover:bg-grey duration-300"
						onClick={() => navigate("/connect")}
					>
						Let's talk!
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Fixit;
