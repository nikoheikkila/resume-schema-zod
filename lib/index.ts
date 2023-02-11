import * as z from "zod";
import { schema } from "./schema";

type Resume = z.infer<typeof schema>;

export const parseFromString = (str: string): Resume => {
	const result = schema.safeParse(toJSON(str));

	if (!result.success) {
		throw new Error(`Resume did not pass schema validation: ${result.error}`);
	}

	return result.data;
};

const toJSON = (str: string, ...args: any[]): Record<string, unknown> => {
	try {
		return JSON.parse(str, ...args);
	} catch (e: unknown) {
		throw new Error(`Resume is not valid JSON: ${e}`);
	}
};
