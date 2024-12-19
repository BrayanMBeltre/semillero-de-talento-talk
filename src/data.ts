import fs from "node:fs/promises";
import path from "node:path";
import exampleData from "../example.json";

interface Data {
	personalInfo: {
		firstName: string;
		lastName: string;
		about: string;
		email: string;
		githubProfileUrl: string;
		linkedinProfileUrl?: string;
	};
	skills?: string[];
	experiences: Array<
		| {
				date: string;
				role: string;
				company: string;
				description: string;
				companyLogoUrl?: string;
		  }
		| undefined
	>;

	projects: Array<
		| {
				name: string;
				description: string;
				ProjectThumbnailUrl?: string;
				projectUrl: "https://github.com/BrayanMBeltre/talento-workshop-template";
		  }
		| undefined
	>;
}
[];

export const getConfigFile = async () => {
	try {
		const url = path.resolve(import.meta.dirname, "../CONFIG.json");
		const json = await fs.readFile(url, "utf-8");
		const data = JSON.parse(json) as Data;

		return data;
	} catch (error) {
		console.error("Error loading the config file", error);

		return exampleData as Data;
	}
};
