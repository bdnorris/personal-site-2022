import * as React from "react"
const NetworkIcons = props => {
	if (props.icon === "dribbble") {
		return (
			<svg
				width="46px"
				height="46px"
				viewBox="0 0 46 46"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g
					id="Design-5.1"
					stroke="none"
					strokeWidth="1"
					fill="none"
					fillRule="evenodd"
				>
					<g
						id="Desktop"
						transform="translate(-79.000000, -686.000000)"
						fill="#3B516B"
					>
						<path
							id="Dribbble"
							d="M112.977303,725.290258 C112.777151,724.105709 111.730405,718.33982 109.152761,711.262273 C115.495443,710.248104 120.988828,711.987066 121.394543,712.119584 C120.520903,717.593392 117.386076,722.312658 112.977303,725.290258 L112.977303,725.290258 L112.977303,725.290258 Z M102.001352,728.643777 C97.2463691,728.643777 92.8862821,726.953495 89.486388,724.140867 C89.7460457,724.351814 89.9272652,724.484332 89.9272652,724.484332 C89.9272652,724.484332 93.6923032,716.27362 105.341742,712.21424 C105.385018,712.198013 105.430999,712.187195 105.474275,712.173673 C108.238549,719.353989 109.377256,725.368687 109.669371,727.086013 C107.313518,728.08666 104.719645,728.643777 102.001352,728.643777 L102.001352,728.643777 L102.001352,728.643777 Z M82.3566179,708.998648 C82.3566179,708.790405 82.3674369,708.584867 82.3728465,708.379329 C82.7217616,708.387442 92.4264715,708.606502 102.539601,705.580222 C103.102193,706.680934 103.640442,707.803281 104.13271,708.920219 C103.873052,708.990534 103.616099,709.068963 103.359146,709.155506 C92.759158,712.57934 87.382078,722.115233 87.382078,722.115233 C87.382078,722.115233 87.3901923,722.123346 87.3901923,722.126051 C84.260775,718.645423 82.3566179,714.045153 82.3566179,708.998648 L82.3566179,708.998648 L82.3566179,708.998648 Z M93.6192744,691.238521 C93.881637,691.587395 97.5141412,696.512199 100.914035,702.553942 C91.4825072,705.060968 83.2951726,704.960903 82.7785618,704.95279 C84.0525078,698.867776 88.1394132,693.823976 93.6192744,691.238521 L93.6192744,691.238521 L93.6192744,691.238521 Z M97.295055,689.929567 C97.295055,689.932271 97.2923502,689.934976 97.2923502,689.934976 C97.2923502,689.934976 97.2680073,689.940385 97.2328453,689.945793 C97.2544834,689.940385 97.2734168,689.93768 97.295055,689.929567 L97.295055,689.929567 L97.295055,689.929567 Z M114.973423,694.262097 C114.924737,694.335117 112.128006,698.594626 104.711531,701.372097 C101.354913,695.203245 97.6656083,690.302781 97.3707885,689.91334 C98.8557065,689.553648 100.405539,689.358928 102.001352,689.358928 C106.972717,689.358928 111.514024,691.214181 114.973423,694.262097 L114.973423,694.262097 L114.973423,694.262097 Z M121.637973,708.803927 C121.353972,708.741725 114.705651,707.311071 107.957253,708.160268 C107.816605,707.824916 107.678662,707.48686 107.532604,707.148804 C107.124184,706.186019 106.683307,705.234053 106.226201,704.298313 C113.983477,701.131401 117.131828,696.579811 117.169695,696.525722 C119.923149,699.871127 121.591992,704.144159 121.637973,708.803927 L121.637973,708.803927 L121.637973,708.803927 Z M124.53478,704.371333 C124.231846,702.894703 123.777445,701.437004 123.19051,700.046916 C122.617099,698.683873 121.900335,697.36951 121.069971,696.14169 C120.250426,694.924687 119.303757,693.778 118.265126,692.739491 C117.22379,691.698277 116.079673,690.754424 114.859822,689.932271 C113.631857,689.0993 112.31734,688.38803 110.954137,687.809277 C109.563885,687.225116 108.10872,686.770768 106.631916,686.470574 C105.117246,686.159563 103.559299,686 102.001352,686 C100.440701,686 98.8827542,686.159563 97.3680837,686.470574 C95.8912801,686.770768 94.4361145,687.225116 93.0458635,687.809277 C91.6826601,688.38803 90.3681425,689.0993 89.1374728,689.932271 C87.9203269,690.754424 86.7762098,691.698277 85.7348739,692.739491 C84.6962427,693.778 83.7522785,694.924687 82.9300288,696.14169 C82.0996648,697.36951 81.3829012,698.683873 80.8094902,700.046916 C80.2198506,701.437004 79.7681543,702.894703 79.4652202,704.371333 C79.1568766,705.883121 79,707.440884 79,708.998648 C79,710.56182 79.1568766,712.119584 79.4652202,713.634076 C79.7681543,715.110706 80.2198506,716.565701 80.8094902,717.953084 C81.3829012,719.316127 82.0996648,720.635899 82.9300288,721.863719 C83.7522785,723.080722 84.6962427,724.222 85.7348739,725.265918 C86.7762098,726.304427 87.9203269,727.245576 89.1374728,728.070433 C90.3681425,728.9007 91.6826601,729.614675 93.0458635,730.190723 C94.4361145,730.780293 95.8912801,731.229232 97.3680837,731.529426 C98.8827542,731.843142 100.440701,732 102.001352,732 C103.559299,732 105.117246,731.843142 106.631916,731.529426 C108.10872,731.229232 109.563885,730.780293 110.954137,730.190723 C112.31734,729.614675 113.631857,728.9007 114.859822,728.070433 C116.079673,727.245576 117.22379,726.304427 118.265126,725.265918 C119.303757,724.222 120.250426,723.080722 121.069971,721.863719 C121.900335,720.635899 122.617099,719.316127 123.19051,717.953084 C123.777445,716.565701 124.231846,715.110706 124.53478,713.634076 C124.843123,712.119584 125,710.56182 125,708.998648 C125,707.440884 124.843123,705.883121 124.53478,704.371333 L124.53478,704.371333 L124.53478,704.371333 Z"
						/>
					</g>
				</g>
			</svg>
		)
	}
	if (props.icon === 'github') {
		return (
			<svg
				width="48px"
				height="47px"
				viewBox="0 0 48 47"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g
					id="Design-5.1"
					stroke="none"
					strokeWidth="1"
					fill="none"
					fillRule="evenodd"
				>
					<g
						id="Desktop"
						transform="translate(-145.000000, -685.000000)"
						fill="#3B516B"
					>
						<path
							id="Github"
							d="M168.9985,685 C155.746,685 145,695.787092 145,709.096644 C145,719.740671 151.876,728.77183 161.4145,731.958412 C162.6145,732.179786 163.0525,731.435849 163.0525,730.797328 C163.0525,730.225068 163.0315,728.710086 163.0195,726.699648 C156.343,728.155898 154.9345,723.469394 154.9345,723.469394 C153.844,720.686405 152.2705,719.94548 152.2705,719.94548 C150.091,718.450075 152.4355,718.480194 152.4355,718.480194 C154.843,718.650366 156.1105,720.963499 156.1105,720.963499 C158.2525,724.645538 161.728,723.58234 163.096,722.964902 C163.3135,721.407754 163.9345,720.346062 164.62,719.743683 C159.2905,719.135281 153.688,717.069123 153.688,707.836167 C153.688,705.205279 154.6225,703.054788 156.1585,701.369634 C155.911,700.759726 155.0875,698.311058 156.3925,694.993458 C156.3925,694.993458 158.4085,694.345902 162.9925,697.46321 C164.908,696.928599 166.96,696.662047 169.0015,696.651505 C171.04,696.662047 173.0935,696.928599 175.0105,697.46321 C179.5915,694.345902 181.603,694.993458 181.603,694.993458 C182.9125,698.311058 182.089,700.759726 181.8415,701.369634 C183.3805,703.054788 184.309,705.205279 184.309,707.836167 C184.309,717.091712 178.6975,719.129257 173.3515,719.725612 C174.2125,720.469549 174.9805,721.939353 174.9805,724.18773 C174.9805,727.408949 174.9505,730.006706 174.9505,730.797328 C174.9505,731.441873 175.3825,732.191834 176.6005,731.9554 C186.13,728.762794 193,719.737659 193,709.096644 C193,695.787092 182.254,685 168.9985,685"
						/>
					</g>
				</g>
			</svg>
		)
	}
	if (props.icon === 'linkedin') {
		return (
			<svg
				width="44px"
				height="40px"
				viewBox="0 0 44 40"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g
					id="Design-5.1"
					stroke="none"
					strokeWidth="1"
					fill="none"
					fillRule="evenodd"
				>
					<g
						id="Desktop"
						transform="translate(-214.000000, -689.000000)"
						fill="#3B516B"
					>
						<path
							id="LinkedIn"
							d="M258,729 L248.2754,729 L248.2754,714.9384 C248.2754,711.257796 246.754233,708.74515 243.409219,708.74515 C240.850659,708.74515 239.427799,710.440738 238.765522,712.074854 C238.517168,712.661395 238.555974,713.478453 238.555974,714.295511 L238.555974,729 L228.921919,729 C228.921919,729 229.046096,704.091247 228.921919,701.827047 L238.555974,701.827047 L238.555974,706.091631 C239.125118,704.226996 242.203669,701.565794 247.116416,701.565794 C253.21143,701.565794 258,705.474355 258,713.890824 L258,729 L258,729 Z M219.17921,698.428187 L219.117121,698.428187 C216.0127,698.428187 214,696.350964 214,693.717936 C214,691.033681 216.072201,689 219.238711,689 C222.402634,689 224.348071,691.028559 224.41016,693.710252 C224.41016,696.34328 222.402634,698.428187 219.17921,698.428187 L219.17921,698.428187 L219.17921,698.428187 Z M215.109831,701.827047 L223.685795,701.827047 L223.685795,729 L215.109831,729 L215.109831,701.827047 L215.109831,701.827047 Z"
						/>
					</g>
				</g>
			</svg>
		)
	}
	if (props.icon === 'codepen') {
		return (
			<svg
				width="48px"
				height="48px"
				viewBox="0 0 48 48"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g
					id="Design-5.1"
					stroke="none"
					strokeWidth="1"
					fill="none"
					fillRule="evenodd"
				>
					<g
						id="Desktop"
						transform="translate(-278.000000, -685.000000)"
						fill="#3B516B"
					>
						<path
							id="Codepen"
							d="M325.982,701.419 C325.9775,701.3875 325.97,701.359 325.9655,701.329 C325.955,701.2705 325.9445,701.212 325.9295,701.1565 C325.9205,701.122 325.907,701.089 325.8965,701.056 C325.88,701.005 325.8635,700.9555 325.844,700.906 C325.8305,700.8715 325.814,700.837 325.7975,700.8055 C325.7765,700.7575 325.754,700.7125 325.727,700.669 C325.709,700.636 325.688,700.6045 325.6685,700.573 C325.6415,700.5295 325.613,700.4875 325.5815,700.447 C325.559,700.417 325.535,700.387 325.511,700.3585 C325.478,700.3195 325.4435,700.282 325.4075,700.246 C325.3805,700.219 325.355,700.1905 325.3265,700.1665 C325.2875,700.132 325.2485,700.099 325.2095,700.0675 C325.178,700.0435 325.148,700.0195 325.1165,699.997 C325.1045,699.9895 325.094,699.979 325.082,699.9715 L303.1445,685.3465 C302.4515,684.8845 301.55,684.8845 300.8555,685.3465 L278.9195,699.9715 C278.9075,699.979 278.897,699.9895 278.885,699.997 C278.852,700.0195 278.822,700.0435 278.792,700.0675 C278.7515,700.099 278.7125,700.132 278.675,700.1665 C278.6465,700.1905 278.6195,700.219 278.5925,700.246 C278.5565,700.282 278.522,700.3195 278.4905,700.3585 C278.465,700.387 278.441,700.417 278.4185,700.447 C278.3885,700.4875 278.36,700.5295 278.333,700.573 C278.312,700.6045 278.2925,700.636 278.273,700.669 C278.2475,700.7125 278.225,700.7575 278.2025,700.8055 C278.1875,700.837 278.171,700.8715 278.1575,700.906 C278.1365,700.9555 278.12,701.005 278.1035,701.056 C278.093,701.089 278.081,701.122 278.072,701.1565 C278.057,701.212 278.0465,701.2705 278.036,701.329 C278.03,701.359 278.0225,701.3875 278.0195,701.419 C278.0075,701.506 278,701.596 278,701.6875 L278,716.3125 C278,716.4025 278.0075,716.4925 278.0195,716.5825 C278.0225,716.611 278.03,716.641 278.036,716.671 C278.0465,716.7295 278.057,716.7865 278.072,716.8435 C278.081,716.878 278.093,716.911 278.1035,716.944 C278.12,716.9935 278.1365,717.0445 278.1575,717.0955 C278.171,717.1285 278.1875,717.1615 278.2025,717.1945 C278.225,717.241 278.2475,717.286 278.273,717.3325 C278.2925,717.364 278.312,717.3955 278.333,717.427 C278.36,717.4705 278.3885,717.511 278.4185,717.5515 C278.441,717.583 278.465,717.613 278.4905,717.6415 C278.522,717.679 278.5565,717.718 278.5925,717.7525 C278.6195,717.781 278.6465,717.808 278.675,717.8335 C278.7125,717.868 278.7515,717.901 278.792,717.9325 C278.822,717.9565 278.852,717.9805 278.885,718.003 C278.897,718.0105 278.9075,718.021 278.9195,718.0285 L300.8555,732.6535 C301.202,732.8845 301.601,733 302,733 C302.399,733 302.798,732.8845 303.1445,732.6535 L325.082,718.0285 C325.094,718.021 325.1045,718.0105 325.1165,718.003 C325.148,717.9805 325.178,717.9565 325.2095,717.9325 C325.2485,717.901 325.2875,717.868 325.3265,717.8335 C325.355,717.808 325.3805,717.781 325.4075,717.7525 C325.4435,717.718 325.478,717.679 325.511,717.6415 C325.535,717.613 325.559,717.583 325.5815,717.5515 C325.613,717.511 325.6415,717.4705 325.6685,717.427 C325.688,717.3955 325.709,717.364 325.727,717.3325 C325.754,717.286 325.7765,717.241 325.7975,717.1945 C325.814,717.1615 325.8305,717.1285 325.844,717.0955 C325.8635,717.0445 325.88,716.9935 325.8965,716.944 C325.907,716.911 325.9205,716.878 325.9295,716.8435 C325.9445,716.7865 325.955,716.7295 325.9655,716.671 C325.97,716.641 325.9775,716.611 325.982,716.5825 C325.994,716.4925 326,716.4025 326,716.3125 L326,701.6875 C326,701.596 325.994,701.506 325.982,701.419 L325.982,701.419 L325.982,701.419 Z M304.0625,690.9175 L320.2235,701.6905 L313.0055,706.519 L304.0625,700.537 L304.0625,690.9175 L304.0625,690.9175 Z M299.9375,690.9175 L299.9375,700.537 L290.996,706.519 L283.7765,701.6905 L299.9375,690.9175 L299.9375,690.9175 Z M282.125,705.5485 L287.2865,709 L282.125,712.4515 L282.125,705.5485 L282.125,705.5485 Z M299.9375,727.0825 L283.7765,716.3095 L290.996,711.4825 L299.9375,717.463 L299.9375,727.0825 L299.9375,727.0825 Z M302,713.8795 L294.7055,709 L302,704.1205 L309.296,709 L302,713.8795 L302,713.8795 Z M304.0625,727.0825 L304.0625,717.463 L313.0055,711.4825 L320.2235,716.3095 L304.0625,727.0825 L304.0625,727.0825 Z M321.875,712.4515 L316.715,709 L321.875,705.5485 L321.875,712.4515 L321.875,712.4515 Z"
						/>
					</g>
				</g>
			</svg>
		)
	}
}

export default NetworkIcons