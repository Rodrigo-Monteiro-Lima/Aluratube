import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { TrashIcon } from '@radix-ui/react-icons';
import { StyledAlertContent, StyledDescription, StyledOverlay, StyledTitle, Button } from './DeleteButton.styled';

const DeleteButton = ({ handleDelete }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button aria-label="Deletar vídeo">
          <TrashIcon />
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <StyledOverlay />
        <StyledAlertContent>
          <StyledTitle>Tem certeza que quer deletar este vídeo?</StyledTitle>
          <StyledDescription>
            Esta ação não pode ser revertida. O vídeo será permanentemente
            excluído do servidor.
          </StyledDescription>
          <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
            <AlertDialog.Cancel asChild>
              <Button className="cancel">Cancelar</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button onClick={handleDelete} className="confirm">
                Sim, deletar vídeo
              </Button>
            </AlertDialog.Action>
          </div>
        </StyledAlertConten>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default DeleteButton;
