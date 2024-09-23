import { Elements, UI, YooEditor, YooptaBlockData } from '@yoopta/editor';
import { DividerElementProps, DividerTheme } from '../types';
import SolidIcon from '../icons/solid.svg';
import DotsIcon from '../icons/dots.svg';
import DashedIcon from '../icons/dashed.svg';
import CheckmarkIcon from '../icons/checkmark.svg';

const { ExtendedBlockActions, BlockOptionsMenuGroup, BlockOptionsMenuItem, BlockOptionsSeparator } = UI;

type Props = {
  editor: YooEditor;
  block: YooptaBlockData;
  props?: DividerElementProps;
};

const DividerBlockOptions = ({ editor, block, props: dividerProps }: Props) => {
  const onChangeTheme = (theme: DividerTheme) => {
    Elements.updateElement<'divider', DividerElementProps>(editor, block.id, {
      type: 'divider',
      props: {
        theme,
      },
    });
  };

  const isActiveTheme = (theme: DividerTheme) => dividerProps?.theme === theme;

  return (
    <ExtendedBlockActions onClick={() => editor.setSelection([block.meta.order])} className="yoopta-divider-options">
      <BlockOptionsSeparator />
      <BlockOptionsMenuGroup>
        <BlockOptionsMenuItem>
          <button
            type="button"
            className="yoopta-block-options-button justify-between"
            onClick={() => onChangeTheme('solid')}
          >
            <span className="flex">
              <SolidIcon width={16} height={16} className="w-4 h-4 mr-2" />
              Line
            </span>
            {isActiveTheme('solid') && <CheckmarkIcon width={16} height={16} color="#000" className="w-4 h-4" />}
          </button>
        </BlockOptionsMenuItem>
        <BlockOptionsMenuItem>
          <button
            type="button"
            className="yoopta-block-options-button justify-between"
            onClick={() => onChangeTheme('dashed')}
          >
            <span className="flex">
              <DashedIcon width={16} height={16} color={'tranparent'} className="w-4 h-4 mr-2" />
              Dashed
            </span>
            {isActiveTheme('dashed') && <CheckmarkIcon width={16} height={16} color="#000" className="w-4 h-4" />}
          </button>
        </BlockOptionsMenuItem>
        <BlockOptionsMenuItem>
          <button
            type="button"
            className="yoopta-block-options-button justify-between"
            onClick={() => onChangeTheme('dotted')}
          >
            <span className="flex">
              <DotsIcon width={16} height={16} className="w-4 h-4 mr-2" />
              Dots
            </span>
            {isActiveTheme('dotted') && <CheckmarkIcon width={16} height={16} color="#000" className="w-4 h-4" />}
          </button>
        </BlockOptionsMenuItem>
        <BlockOptionsMenuItem>
          <button
            type="button"
            className="yoopta-block-options-button justify-between"
            onClick={() => onChangeTheme('gradient')}
          >
            <span className="flex">
              <SolidIcon width={14} height={16} className="w-4 h-4 mr-2" color={dividerProps?.color || '#EFEFEE'} />
              Gradient
            </span>
            {isActiveTheme('gradient') && <CheckmarkIcon width={16} height={16} color="#000" className="w-4 h-4" />}
          </button>
        </BlockOptionsMenuItem>
      </BlockOptionsMenuGroup>
    </ExtendedBlockActions>
  );
};

export { DividerBlockOptions };