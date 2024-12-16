import fs from "node:fs/promises";
import path from "node:path";
import exampleData from "../example.json";

interface Data {
	personalInfo?: {
		firstName?: string;
		lastName?: string;
		about?: string;
		birthDate?: string;
		email?: string;
		github?: string;
		linkedin?: string;
	};
	skills?: string[];
	experiences?: {
		dates?: string;
		role?: string;
		company?: string;
		description?: string;
		logo?: string;
		example?: boolean;
	}[];
	projects?: {
		name?: string;
		description?: string;
		image?: string;
		url?: string;
		example?: boolean;
	}[];
}

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
