// Type definitions for musicmetadata 2.0.2
// Project: https://github.com/leetreveil/musicmetadata
// Definitions by: Meowtimer <https://github.com/meowtimer/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "musicmetadata" {

	import fs = require('fs');
	
	interface Parser extends NodeJS.EventEmitter {}
	
	type Seconds = number;
	
	interface Metadata {
		artist?: string[];
		album?: string;
		albumartist?: string[];
		title?: string;
		year?: string;
		track?: { no: number; of: number };
		disk?: { no: number; of: number };
		genre?: string[];
		picture?: [{format: string; data: Buffer}];
		duration?: Seconds;
	}
	
	function mm(stream: fs.ReadStream, callback: (err, metadata: Metadata) => void): Parser;
	
	export = mm;
}