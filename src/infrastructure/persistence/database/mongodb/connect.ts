import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    const { MONGO_USERNAME, MONGO_USERPASSWORD, MONGO_HOST, MONGO_DB } =
      process.env;

    return {
      //mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
      uri: `mongodb://${MONGO_USERNAME}:${MONGO_USERPASSWORD}@${MONGO_HOST}/${MONGO_DB}?readPreference=secondaryPreferred`,
    };
  }
}
