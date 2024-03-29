import { Chip } from '@mui/material';

export const StatusChip = ({ status }) => {
	const colorMapper = {
		unpublished: 'warning',
		published: 'success',
		requested: 'warning',
		cancelled: 'error',
		finished: 'info',
		accepted: 'success',
	};
	const labelMapper = {
		unpublished: 'sin publicar',
		published: 'publicada',
		requested: 'solicitada',
		cancelled: 'cancelada',
		finished: 'finalizada',
		accepted: 'aceptada',
	};

	const chipColor = colorMapper[status] || '';
	const chipLabel = labelMapper[status] || '';

	return status ? (
		<Chip color={chipColor} variant='outlined' label={chipLabel} />
	) : null;
};
