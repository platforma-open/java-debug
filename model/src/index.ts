import { BlockModel, InferOutputsType } from '@platforma-sdk/model';

export type BlockArgs = {
  deduplication?: string;
};

export const model = BlockModel.create<BlockArgs>()

  .initialArgs({deduplication: "put any unique string here to trick platforma deduplication and run block again"})

  .output('message', (ctx) => ctx.outputs?.resolve('message')?.getDataAsString())

  .sections([{ type: 'link', href: '/', label: 'Main' }])

  .done();

export type BlockOutputs = InferOutputsType<typeof model>;
