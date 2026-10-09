import { defineConfig } from "@/config/index.js";

export default defineConfig("0.0.1", {
	// ID вашего бота (уже подставил ваш реальный ID со скриншота)
	clientId: "1557988407152746566",
	
	// ID вашего Discord-сервера (замените на свой ID, если умеете его копировать)
	guildId: "123456789012345678",
	
	// Язык бота ("en" - английский, "fr" - французский)
	lang: "en",
	uuidType: "uuid",
	minimalTracking: false,
	showWSLog: false,
	logs: {
		enabled: false,
		channelId: "171717171717171717",
		events: {
			ticketCreate: true,
			ticketClaim: true,
			ticketUnclaim: true,
			ticketClose: true,
			ticketReopen: true,
			ticketDelete: true,
			userAdded: true,
			userRemoved: true,
			ticketRename: true
		}
	},
	status: {
		enabled: true,
		text: "Powered by git.new/ticketbot",
		type: "WATCHING",
		url: "https://twitch.tv",
		status: "online"
	},

	tickets: {
		// Шаблон названия каналов. {ticketNumber} сделает нумерацию 001, 002 и т.д.
		channelNameTemplate: "{ticketNumber}-ticket-{username}",
		maxOpenPerUser: 1,
		staffRoleIds: ["111111111111111111"],
		blockedRoleIds: ["222222222222222222"],
		mentionRoleIds: ["333333333333333333"],
		defaultWelcomeMessage: "tickets/ticket-opened",
		defaultWelcomeContent: "A staff member will be with you shortly. Please explain your issue clearly.",

		claims: {
			enabled: true,
			mode: "soft",
			showButtons: true,
			allowUnclaim: true,
			nameWhenClaimed: "{ticketNumber}-claimed-{claimerUsername}",
			categoryWhenClaimed: "",
			takeoverMode: "staff",
			takeoverRoleIds: []
		},
		close: {
			staffOnly: true,
			dmUserOnClose: true,
			askForReason: true,
			showCloseButton: true,
			deleteChannelOnClose: false,
			createTranscript: false,
			closeTicketCategoryId: "",
			dmMessage: "tickets/ticket-closed-dm",
			channelMessage: "tickets/ticket-closed"
		}
	},

	ticketTypes: {
		general: {
			name: "General Support",
			description: "General help and account questions.",
			emoji: "🎫",
			categoryId: "777777777777777777",
			channelNameTemplate: "{ticketNumber}-general-{username}",
			message: "tickets/ticket-opened",
			welcomeContent: "Tell us what you need help with and include screenshots if they matter.",
			blockedRoleIds: [],
			staffRoleIds: []
		}
	}
});
