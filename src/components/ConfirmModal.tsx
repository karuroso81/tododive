type ConfirmModalProps = {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
};

export const ConfirmModal = ({
  open,
  title,
  message,
  onConfirm,
  onClose
}: ConfirmModalProps) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 z-40"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-[#121939] border border-[#1c2a4a]
                     rounded-2xl p-6 max-w-sm w-full"
        >
          <h3 className="text-xl font-bold mb-2">
            {title}
          </h3>

          <p className="text-[#b9c4d6] mb-6">
            {message}
          </p>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 border border-[#314b6b]
                         rounded-full py-2"
            >
              Cancelar
            </button>

            <button
              onClick={onConfirm}
              className="flex-1 bg-gradient-to-r
                         from-[#00c2ff] to-[#1cffb3]
                         text-[#00263b] font-semibold
                         rounded-full py-2"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
